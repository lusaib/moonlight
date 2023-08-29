import { useToggle } from "../../hooks";
import noImageFoundImage from "../../assets/default_image_icon_08.jpg";

type ImagePlaceholderProps = {
  imageProps: React.ImgHTMLAttributes<HTMLImageElement>;
};
/**
 * @author lusaib latheef
 * @description the image place holder to show when the page is loading the image.
 */
export default function ImagePlaceholder({
  imageProps,
}: ImagePlaceholderProps) {
  const { src, ...rest } = imageProps;
  const { toggle, isOpen } = useToggle();

  const onLoadSuccess = () => {
    toggle("isImageLoaded");
  };

  const onLoadError = () => {
    toggle("isImageLoaded");
  };

  return (
    <img
      {...rest}
      src={isOpen("isImageLoaded") ? src : noImageFoundImage}
      onLoadedData={onLoadSuccess}
      onError={onLoadError}
      className="w-full h-full object-cover"
    
    />
  );
}
