import html2canvas from 'html2canvas';

export const capture = () => {
  html2canvas(document.querySelector('#capture'), {
    useCORS: true
  }).then(canvas => {
    var imgData = canvas.toDataURL('image/jpeg');
    // window.open(imgData, '_blank');
    // console.log(imgData);
    // document.body.appendChild(imgData);
    var a = document.createElement('a');
    a.href = imgData;
    a.download = 'meme.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};
