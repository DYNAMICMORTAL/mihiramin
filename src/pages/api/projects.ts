import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

const contentPath = path.join(process.cwd(), 'documentation');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const files = fs.readdirSync(contentPath);
  const projects = files.map((fileName) => {
    const filePath = path.join(contentPath, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    return { slug: fileName.replace('.md', ''), title: data.title, description: data.description };
  });

  res.status(200).json({ projects });
}
