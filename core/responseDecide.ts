import { Request, Response } from "express";

export default (req: Request, res: Response) => {
  return (data: any, view?: string, layout?: string) => {
    if (req.accepts("html")) {
      return layout
        ? res.render(view!, { data, layout })
        : res.render(view!, { data });
    }

    res.json(data);
  };
};
