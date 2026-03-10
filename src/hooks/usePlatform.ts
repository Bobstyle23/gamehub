import usePlatforms from "./usePlatforms";

function usePlatform(selectedPlatformId: number) {
  const { data: platforms } = usePlatforms();

  const selectedPlatformName = platforms.results.find(
    (platform) => platform.id == selectedPlatformId,
  )?.name;

  return { selectedPlatformName };
}

export default usePlatform;
