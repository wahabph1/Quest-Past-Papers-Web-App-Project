import React from 'react';
import piza3Image from './WhatsApp Image 2024-01-23 at 1.38.44 PM.jpeg';
import piza2Image from "./facebook.png";
import arr from './name';
import But from './But'
import Batches from './SoftwareBatches';
import { Semester } from './Semester';
import Head from './Header';
import Footer from './Footer';

export function Subjects(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' > 
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject1}
      </button>
      <button onClick={() => downloadImage(arr[0]['ict'])}>
        {arr[0].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject5}
      </button>
      </div>
      <Footer></Footer>
    </>
  );
}






export function Subjects2(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' > 
   
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject5}
      </button>
      </div>
      <Footer></Footer>
    </>
  );

}



export function Subjects3(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' >
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject5}

      </button>
      </div>
      <Footer></Footer>
    </>
  );

}



export function Subjects4(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' > 
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject5}
      </button>
      </div>

      <Footer></Footer>
    </>
  );

}


// 22 Batche Semester


export function Subjects22Semester1(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
     <div  id='Mid' >
      <h1>22 Batche 1 Semester</h1>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject5}
      </button>
      </div>

      <Footer></Footer>
    </>
  );
}






export function Subjects22Semester2(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' > 
      <h1>22 Batche 2nd Semester</h1>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject5}
      </button>
      </div>
      <Footer></Footer>
    </>
  );

}





// 20 Batch Semester
 


export function Subjects20Semester1(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  return (
    <>
    <Head></Head>
    <div id='Mid' > 
      <h1>20 Batche 1 Semester</h1>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[0].subject5}
      </button>
      </div>

      <Footer></Footer>
    </>
  );
}

export function Subjects20Semester2(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' > 
      <h1>20 Batche 2 Semester</h1>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[1].subject5}
      </button>
      </div>
      <Footer></Footer>
    </>
  );
}


export function Subjects20Semester3(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
      <h1>20 Batche 2 Semester</h1>
      <div id='Mid' > 
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[2].subject4}
      </button>
      </div>
      <Footer></Footer>
    </>
  );
}

export function Subjects20Semester4(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
     <Head></Head>
      <h1>20 Batche 2 Semester</h1>
      <div id='Mid' > 
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[3].subject5}
      </button>
      </div>
      <Footer></Footer>
    </>
  );
}


export function Subjects20Semester5(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' > 
      <h1>20 Batche 2 Semester</h1>
      <button onClick={() => downloadImage(arr[4]['sc'])}>
        {arr[4].subject1}
      </button>
      <button onClick={() => downloadImage(arr[4]['ee'])}>
        {arr[4].subject2}
      </button>
      <button onClick={() => downloadImage(arr[4]['sp'])}>
        {arr[4].subject3}
      </button>
      <button onClick={() => downloadImage(arr[4]['hci'])}>
        {arr[4].subject4}
      </button>
      <button onClick={() => downloadImage(arr[4]['is'])}>
        {arr[4].subject5}
      </button>
      </div>

      <Footer></Footer>
    </>
  );
}


export function Subjects20Semester6(props) {

  const downloadImage = (imageUrl) => {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'image.jpg';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
    <Head></Head>
    <div id='Mid' >
      <h1>20 Batche 2 Semester</h1>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[5].subject1}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[5].subject2}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[5].subject3}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[5].subject4}
      </button>
      <button onClick={() => downloadImage(piza3Image)}>
        {arr[5].subject5}
      </button>
      </div>
      <Footer></Footer>
    </>
  );
}