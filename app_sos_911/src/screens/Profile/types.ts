export type ProfileScreenProps = {
    navigation: {
      navigate: (screen: string) => void;
    };
  };
  
  export type EditScreenProps = {
    navigation: {
      goBack: () => void;
    };
  };
  