import icon from './icon.png';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

export function Imagefind({ i }) {
  const images = [icon, image1, image2, image3];
  const selectedImage = images[i] || icon; // Default to 'icon' if index is out of range

  return <img src={selectedImage} alt={`Slide ${i}`} className="d-block w-100" />;
}
