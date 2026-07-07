import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://wreakdev.vercel.app",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: "https://wreakdev.vercel.app/projects",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ]
}