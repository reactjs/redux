import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChildToNode, increment, removeNodeByParent } from './treeSlice'

const MemoNode = React.memo(function Node({ id, parentId }) {
  const node = useSelector(state => state.tree[id])
  const dispatch = useDispatch()

  const { childIds, counter } = node

  const handleIncrementClick = () => {
    dispatch(increment(id))
  }

  const handleAddChildClick = () => {
    dispatch(addChildToNode(id))
  }

  const handleRemoveClick = () => {
    dispatch(removeNodeByParent({ parentId, childId: id }))
  }

  return (
    <div>
      Counter: {counter} <button onClick={handleIncrementClick}>+</button>{' '}
      {typeof parentId !== 'undefined' && (
        <a
          href="#"
          onClick={handleRemoveClick} // eslint-disable-line jsx-a11y/anchor-is-valid
          style={{ color: 'lightgray', textDecoration: 'none' }}
        >
          ×
        </a>
      )}
      <ul>
        {childIds.map(childId => (
          <li key={childId}>
            <MemoNode id={childId} parentId={id}></MemoNode>
          </li>
        ))}
        <li key="add">
          <a
            href="#" // eslint-disable-line jsx-a11y/anchor-is-valid
            onClick={handleAddChildClick}
          >
            Add child
          </a>
        </li>
      </ul>
    </div>
  )
})

export default MemoNode
