import React from 'react'
import { doubts } from '../../assets/data/doubts'
import DoubsItem from './DoubtsItem'

export default function DoubtsList() {
    return (
        <ul className='mt-[38px]'>
            {doubts.map((item, index) => <DoubsItem item={item} key={index} />)}
        </ul>
    )
}
