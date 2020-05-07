import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'antd-mobile';
import RcViewer from '@hanyk/rc-viewer';
import LazyLoad from 'react-lazy-load';
import router from 'umi/router';
import { req, pid } from 'utils';
import styles from './index.less';

// lazyload预加载时提前加载好的组件的数量取决于滚动容器的高度和组件的offset的高度
// 未解决 如果使用placeholder, 则懒加载失效
const data = [
  {
    desc: '好困呀,想睡觉,想泡澡,想你了,想吃饭饭,好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭',
    img: [
      'http://zhikume.cn/uploads/54B65AB6-07C2-4F52-A38C-FE3DB6FACB3B_17183f0ebf7.jpeg',
      'http://zhikume.cn/uploads/04391826-C147-4CC6-96F3-4EEA8C909EE5_17188f299f3.jpeg',
      'http://zhikume.cn/uploads/04BC8435-8C73-4186-ABBD-2D35E0D92440_171863f9ace.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg'
    ]
  },
  {
    desc: '好困呀,想睡觉,想泡澡,想你了,想吃饭饭,好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭',
    img: [
      'http://zhikume.cn/uploads/015F500E-F426-46DB-B44F-53C379DA107B_171ab474fe9.jpeg',
      'http://zhikume.cn/uploads/04391826-C147-4CC6-96F3-4EEA8C909EE5_17188f299f3.jpeg',
      'http://zhikume.cn/uploads/04BC8435-8C73-4186-ABBD-2D35E0D92440_171863f9ace.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg'
    ]
  },
  {
    desc: '好困呀,想睡觉,想泡澡,想你了,想吃饭饭,好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭',
    img: [
      'http://zhikume.cn/uploads/015F500E-F426-46DB-B44F-53C379DA107B_171ab474fe9.jpeg',
      'http://zhikume.cn/uploads/04391826-C147-4CC6-96F3-4EEA8C909EE5_17188f299f3.jpeg',
      'http://zhikume.cn/uploads/04BC8435-8C73-4186-ABBD-2D35E0D92440_171863f9ace.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg'
    ]
  },
  {
    desc: '好困呀,想睡觉,想泡澡,想你了,想吃饭饭,好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭',
    img: [
      'http://zhikume.cn/uploads/54B65AB6-07C2-4F52-A38C-FE3DB6FACB3B_17183f0ebf7.jpeg',
      'http://zhikume.cn/uploads/04391826-C147-4CC6-96F3-4EEA8C909EE5_17188f299f3.jpeg',
      'http://zhikume.cn/uploads/04BC8435-8C73-4186-ABBD-2D35E0D92440_171863f9ace.jpeg',
      'http://zhikume.cn/uploads/5AF8F15B-1A97-4B83-B529-65530181EFAD_17186440d03.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg'
    ]
  },
  {
    desc: '好困呀,想睡觉,想泡澡,想你了,想吃饭饭,好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭',
    img: [
      'http://zhikume.cn/uploads/015F500E-F426-46DB-B44F-53C379DA107B_171ab474fe9.jpeg',
      'http://zhikume.cn/uploads/04391826-C147-4CC6-96F3-4EEA8C909EE5_17188f299f3.jpeg',
      'http://zhikume.cn/uploads/04BC8435-8C73-4186-ABBD-2D35E0D92440_171863f9ace.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg'
    ]
  },
  {
    desc: '好困呀,想睡觉,想泡澡,想你了,想吃饭饭,好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭好困呀,想睡觉,想泡澡,想你了,想吃饭饭',
    img: [
      'http://zhikume.cn/uploads/015F500E-F426-46DB-B44F-53C379DA107B_171ab474fe9.jpeg',
      'http://zhikume.cn/uploads/04391826-C147-4CC6-96F3-4EEA8C909EE5_17188f299f3.jpeg',
      'http://zhikume.cn/uploads/04BC8435-8C73-4186-ABBD-2D35E0D92440_171863f9ace.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg',
      'http://zhikume.cn/uploads/1A64BD79-EAD9-4297-AEB5-7434F92C6D69_171e5ba644a.jpeg'
    ]
  }
]

function FriendCircle(props) {
  const [list, setList] = useState([])
  const imgViewRef = useRef(null)
  const onContentVisible = (o) => {
    console.log(o)
  }
  const toEdit = () => {
    router.push('/edit')
  }
  useEffect(() => {
    req.get(`/form/get?id=${pid}&types=all`).then(res => {
      if(res.result.list) {
        setList(res.result.list)
      }
    })
  }, [])
  return <div className={styles.home}>
    <div className={styles.list}>
      {
        list.length && list.map((item, i) => {
          return <LazyLoad key={item.uid} overflow height={280} onContentVisible={onContentVisible}>
            <div className={styles.listItem}>
              <div className={styles.tx} style={item['头像'] === '21' ? {backgroundImage: `url(http://zhikume.cn/uploads/xu_17193634204.png)`} : {}}>
                { item['头像'] ? item['头像'] !== '21' ? item['头像'] : '' : '朋友' }
              </div>
              <div className={styles.box}>
                <div className={styles.desc}>{item['想法']}</div>
                <RcViewer options={{title: 0, navbar: 0, toolbar: 0}} ref={imgViewRef}>
                  <div className={styles.imgBox}>
                    {
                      item['图集'].imgUrls.map((item, i) => {
                        return <div className={styles.imgItem} key={i}>
                          <img src={item} alt=""/>
                        </div>
                      })
                    }
                  </div>   
                </RcViewer>
              </div>
            </div>
          </LazyLoad>
        })
      }                  
    </div>
    <span className={styles.publishBtn} onClick={toEdit}>+</span>
  </div>
}



export default FriendCircle
