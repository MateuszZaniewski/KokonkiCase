export default function ProductImages() {
  const images = [
    "https://i.ibb.co/S5b3LTM/image1.png",
    "https://i.ibb.co/cJJkxMj/image2.png",
    "https://i.ibb.co/9cH077h/image3.png",
    "https://i.ibb.co/87cTnPY/image4.png",
    "https://i.ibb.co/SKKmnq9/image5.png",
  ];

  return (
    <div className="flex gap-5">
      <div className="flex-col space-y-5">
        {images.map((image) => (
          <img key={image} src={image} className="h-24 w-24" />
        ))}
      </div>
      <div>
        <img src={images[0]} className="xl:h-[558px] xl:w-[558px]" />
      </div>
    </div>
  );
}
