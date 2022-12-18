import './PreList.css'
import { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react'
import { POST } from '../../plugins/http'
import { Icon } from '@ricons/utils'
import { AcUnitRound, SearchRound, MoodBadRound } from '@ricons/material'

const payload = {
  token: 'OJnOH8oDd7VOxygO4J0W5Q',
  data: {
    name: 'name',
    cryptoUUIDL: 'cryptoUUID',
    colorRGB: 'colorRGB',
    _repeat: 10
  }
}

export const PreList = () => {
  const [isFocus, setFocus] = useState(false)
  const [datas, setDatas] = useState([])
  const [renderDatas, setRenderDatas] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    POST(
      'https://www.fastmock.site/mock/5304a2c8066e37295a696ed364ea1d40/pre/list',
      'FastMock List',
      payload
    ).then(({ data: { list } }) => {
      setDatas(list)
      setRenderDatas(list)
    })
  }, [])

  const onChangeInput = (e: SyntheticEvent) => {
    switch (e.type) {
      case 'focus':
        setFocus(true)
        break
      case 'blur':
        setFocus(false)
        break
    }
  }

  const getValue = (e: BaseSyntheticEvent) => {
    setSearchValue(e.target.value)
    if (!e.target.value) {
      setRenderDatas(datas)
    }
  }

  const handleSearch = (e: any) => {
    if (e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
      const newDatas = datas.filter((data: any) =>
        data.dua.includes(searchValue)
      )
      setRenderDatas(newDatas)
    }
  }

  return (
    <div className='pre-list'>
      {/* Interaction */}
      <div className='pre-interaction'>
        <div className={`pre-input__wrapper ${isFocus ? 'is-focus' : ''}`}>
          <input
            onFocus={onChangeInput}
            onBlur={onChangeInput}
            onChange={getValue}
            onKeyDown={handleSearch}
            type={'text'}
            placeholder='关键词'
            className='pre-input__inner'
          />
        </div>
        <button className='pre-submit' onClick={handleSearch}>
          <Icon>
            <SearchRound />
          </Icon>
          搜索
        </button>
      </div>

      {/* Search list */}
      <div className='pre-search-list'>
        {renderDatas.length > 0 ? (
          renderDatas.map((data: any, index: any) => (
            <div
              className='pre-search-list-item'
              style={{ color: data.textcolor }}
              key={index}
            >
              <Icon>
                <AcUnitRound />
              </Icon>
              <span className='pre-search-list-item-text'>{data.dua}</span>
            </div>
          ))
        ) : (
          <div className='pre-search-list-item-none'>
            <Icon>
              <MoodBadRound />
            </Icon>
            <span>暂无搜索结果</span>
          </div>
        )}
      </div>
    </div>
  )
}
