function getCroppedImageUrl(url: string): string {
  if (!url) return "No Image";
  const TARGET = "media/";
  const index = url.indexOf(TARGET) + TARGET.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;
