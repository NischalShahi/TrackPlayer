import TrackPlayer, {Capability} from 'react-native-track-player';

const trackSetup = async () => {
  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],

    compactCapabilities: [Capability.Play, Capability.Pause],
  });
};

export default trackSetup;
