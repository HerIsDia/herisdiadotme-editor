import type { OutputData } from '@editorjs/editorjs'

export const saveToMd = (data: OutputData) => {
  let md = ''
  let title = ''
  console.log(data);
  data.blocks.forEach(block => {
    switch (block.type) {
      case 'header':
        const level = block.data.level
        if (level == 1) {
          title = block.data.text
          break
        }
        md += `${'#'.repeat(level)} ${block.data.text}\n\n`
        break
      case 'paragraph':
        md += `${block.data.text}\n\n`
        break
      case 'delimiter':
        md += '---\n\n'
        break
      case 'image':
        md += `![${block.data.caption}](${block.data.url})\n\n`
        break
      case 'list':
        md += block.data.style === 'unordered' ? '- ' : '1. '
        md += block.data.items.join('\n')
        md += '\n'
        break
      case 'quote':
        md += `> ${block.data.text}\n`
        break
      case 'code':
        md += `\`\`\`${block.data.language}\n${block.data.code}\n\`\`\`\n`
        break
      case 'table':
        md += '|'
        md += block.data.content.map(() => '---').join('|')
        md += '|\n'
        md += block.data.content.map(row => row.join(' | ')).join('\n')
        md += '\n'
        break
      case 'raw':
        md += block.data.html
        break
      case 'embed':
        md += `${block.data.service} ${block.data.source}\n`
        break
      default:
        break
    }
  })
  console.log(title);

  return { md, title }


}