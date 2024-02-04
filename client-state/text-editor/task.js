document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');
    const savedText = localStorage.getItem('editorText');

    if (savedText) {
        editor.value = savedText;
    }


    editor.addEventListener('input', function () {
        const textToSave = editor.value;
        localStorage.setItem('editorText', textToSave);
    });
});