import data from "./data";

export default {
  Query: {
    variety: (parent: any, args: { id: string }): any[] => {
      const { id } = args;
      const result: any = data.find(element => element.id == id);
      return result;
    },
    allVarieties: (): any[] => data
  }
};
