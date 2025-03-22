import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const photos = [
  {
    src: "https://img.freepik.com/free-photo/kids-classroom-taking-english-class_23-2149402668.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18750/15-SM877987.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://img.freepik.com/free-photo/children-having-fun-class_1098-3518.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/20690/300-SM1068094.jpg",
    width: 3,
    height: 2,
  }, 
  {
    src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/18750/15-SM877987.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "https://img.freepik.com/free-photo/happy-schoolgirl-with-book-head_23-2148224811.jpg",
    width: 2,
    height: 1.5,
  }, 
 
  {
    src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/17072/18-SM743851.jpg",
    width: 3,
    height: 2,
  },
 
  {
    src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/20690/300-SM1068094.jpg",
    width: 3,
    height: 2,
  },
  {
    src: "https://img.freepik.com/free-photo/happy-schoolgirl-with-book-head_23-2148224811.jpg",
    width: 2,
    height: 1.5,
  },
];

const PhotoGallery = () => {

 

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-screen-xl px-4">
        <MasonryPhotoAlbum photos={photos}  />
      </div>
    </div>
  );
};

export default PhotoGallery;
