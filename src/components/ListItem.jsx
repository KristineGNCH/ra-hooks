export const ListItem = ({item, selected, onClick}) => {
  const className = selected ? 'list__item selected' : 'list-item';
  return (
    <button type="submit" className={className} onClick={onClick}>
        <span className='name__item'>{item.name}</span>
    </button>
  )
}
