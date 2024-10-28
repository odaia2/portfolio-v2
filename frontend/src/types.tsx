// src/types.ts
export type Project = {
    id?: number;
    name: string;
    description: string;
    status: string;
    public: boolean;
    tags: string[];
    publishedAt?: string;
  };
  