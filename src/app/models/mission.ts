export interface Mission {
    mission_name: string;
    launch_year: string;
    details: string;
    links: Links;
    flight_number: number;
  }

  interface Links{
    mission_patch_small: string;
  }