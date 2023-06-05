interface Props {
  tags: string[]
}

export default function AssetTags({ tags }: Props) {
  return (
    <>
      <span>icon</span>
      <ul>
        {tags.map((tag, i) => (
          <li
            className="h-[2.8rem] border border-transparent-navy-second bg-neutral-navy-900 rounded
            py-1 px-2 inline-flex items-center justify-center mr-2 mt-3"
            key={i}
          >
            {tag}
          </li>
        ))}
      </ul>
    </>
  )
}
