export interface componentLoader {
    components: {
      selector: string;
      component: any;
      componentConfig?: any;
      outputs?: string[];
    }[];
  }
  