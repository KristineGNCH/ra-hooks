import { ListItem } from './ListItem';

export const List = ({dataList, onSelectedItem, selectItem}) => {
  return (
    <div className='list'>
        {dataList.map((item) => (
            <ListItem 
            key={item.id}
            item={item}
            selected={onSelectedItem === item.id}
            onClick={() => selectItem(item.id)}
            />
        ))}
    </div>
  )
}
