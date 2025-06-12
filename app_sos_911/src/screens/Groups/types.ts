// types.ts
export interface GroupMember {
    id: string;
    name: string;
    image: string;
  }
  
  export interface Group {
    id: string;
    name: string;
    description: string;
    members: GroupMember[];
    image?: string;
  }
  
  export interface GroupsScreenProps {
    navigation: any; // Ideally, you should use the proper navigation type from @react-navigation/native
  }