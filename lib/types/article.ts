export interface Article {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    description: string;
    featuredImage: {
        asset: {
            _id: string;
            url: string;
            metadata: {
                dimensions: {
                    width: number;
                    height: number;
                };
            };
        };
        alt: string;
    };
    category: {
        _id: string;
        title: string;
        slug: {
            current: string;
        };
        color: string;
        backgroundColor: string;
    };
    author: string;
    publishedAt: string;
    readTime: number;
    tags?: string[];
}