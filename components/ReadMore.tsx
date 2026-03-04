
type Props = {
    title: string;
    url: string;
}

function ReadMore({title, url}: Props) {
  return (
    <div>
        <div>
            <h3 className="text-center text-base text-blue-900 pb-2 hover:text-blue-600"> <a href={url} title="Read more">{title} &rarr; </a></h3>
        </div>
    </div>
  )
}

export default ReadMore