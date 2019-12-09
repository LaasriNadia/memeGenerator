import html2canvas from 'html2canvas';

export const captureMeme = () => {
  html2canvas(document.querySelector('#capture'), {
    useCORS: true
  }).then(canvas => {
    var imgData = canvas.toDataURL('image/jpeg');
    var a = document.createElement('a');
    a.href = imgData;
    a.download = 'meme.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};
