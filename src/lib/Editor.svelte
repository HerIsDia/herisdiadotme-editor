<script>
  import SaveButton from './SaveButton.svelte';

  import EditorJS from '@editorjs/editorjs';
  import Header from '@editorjs/header';
  import List from '@editorjs/list';
  import Embed from '@editorjs/embed';
  import Image from 'editorjs-inline-image';
  import DragDrop from 'editorjs-drag-drop';
  import Undo from 'editorjs-undo';

  const editor = new EditorJS({
    /**
     * Id of Element that should contain the Editor
     */
    holder: 'editorjs',
    autofocus: true,
    placeholder: 'Let`s write an awesome story!',
    minHeight: 20,

    tools: {
      header: Header,
      list: List,
      image: Image,
      embed: Embed,
    },
    onReady: () => {
      new Undo({ editor });
      new DragDrop(editor);
    },
  });
</script>

<article
  class="pl-8 pr-8 prose prose-invert prose-p:text-justify md:prose-lg lg:prose-xl max-w-none"
>
  <div id="editorjs" />
</article>

<SaveButton {editor} />
