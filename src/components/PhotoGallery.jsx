import React from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { motion } from "framer-motion";
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
  // Custom render function for each photo to add a shadow, rounded corners, and hover effects.
  const renderPhoto = ({ photo, imageProps }) => (
    <div className="relative group overflow-hidden rounded-lg shadow-lg"
    >
      <img
        {...imageProps}
        alt={`Photo`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* Optional overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 overflow-hidden">
      <motion.div className="container mx-auto px-4"
      initial={{opacity:0,x:100}}
      whileInView={{opacity:1,x:0}}
      transition={{type:"tween",delay:0.3,duration:0.4}}
      
      viewport={{amount: 0.5 }}>
       
        <MasonryPhotoAlbum photos={photos} layout="masonry" renderPhoto={renderPhoto} />
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
