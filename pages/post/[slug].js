import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');

    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug }}) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)
    return {
        props: {
            frontmatter,
            content
        }
    }
}



export default function PostPage({ frontmatter, content }) {
    return (
        <div className='prose dark:prose-invert px-5 lg:px-0 lg:max-w-3xl mx-auto'>
            <h1>{frontmatter.title}</h1>
            <h4>Date : {frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
    )
}