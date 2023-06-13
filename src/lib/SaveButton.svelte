<script>
  import { saveToMd } from './scripts/saveToMd';

  export let editor;

  const saving = () => {
    editor.save().then((outputData) => {
      const date = outputData.time;
      const dateFormatted = new Date(date).toISOString().slice(0, 10);
      const MdSaved = saveToMd(outputData);
      const mdContent = MdSaved.md;

      let mdYAML = `---\n_\n# buttons:\n#   - label:\n#     href:\n\n# authors:\n#   - Diamant\n\n# heroImage: \n---\n\n`;

      const title =
        MdSaved.title != '' ? MdSaved.title : window.prompt('Enter title');
      const d = window.prompt('Enter description');
      const description = d != '' ? d : mdContent.slice(0, 69) + '...';
      let type = window.prompt('Enter type');
      while (type === '') {
        type = window.prompt('Enter type');
      }

      mdYAML = mdYAML.replace(
        '_',
        `title: ${title}\ndescription: ${description}\ntype: ${type}\npubDate: ${dateFormatted}`
      );

      const mdResult = mdYAML + mdContent;
      const blob = new Blob([mdResult], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title}.md`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  };
</script>

<a id="button" href="#" style="--color: white;" on:click={() => saving()}
  >Export to markdown</a
>

<style>
  a {
    color: var(--color);
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--selection-btn);
    cursor: pointer;
  }

  a:hover {
    color: white;
    border-color: var(--color);
  }
  a:focus,
  a:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
