import React, { useRef, useEffect, useState } from 'react';
import { Button, Icon, TextareaItem, ImagePicker, InputItem, Toast } from 'antd-mobile';
import router from 'umi/router';
import { req, pid, uuid } from 'utils';
import styles from './edit.less';

const map = {
  tx: '头像',
  think: '想法',
  imgs: '图集'
}

const transformO2T = (o = {}, map = {}) => {
  let target = {}
  for(let key in o) {
    target[map[key]] = o[key]
  }
  return target
}

const form = {}

function Edit(props) {
  const [files, setFiles] = useState([])
  const toHome = () => {
    router.push('/')
  }
  const onChange = (files, type, index) => {
    setFiles(files)
  }
  const onAddImageClick = (e) => {
    console.log(e)
  }
  const onTextChange = (type, v) => {
    form[type] = v
  }
  const onSubmit = async () => {
    Toast.loading('正在上传中...', 3);
    if(form.think.length < 2) {
      Toast.fail('想法至少要说2个字哦~', 2);
      return
    }
    const formData = new FormData()
    form['imgs'] = {imgUrls: []}
    for(let i=0; i< files.length; i++) {
      formData.delete('file')
      formData.append('file', files[i].file)
      try{
        const res = await req({
          method: 'post',
          url: '/files/upload/tx',
          data: formData,
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        });
        res.result && form['imgs']['imgUrls'].push(res.result.url)
      }catch(err) {
        Toast.fail('上传失败', 2);
      }
    }

    let data = transformO2T(form, map);
    data.uid = uuid(6)

    req.post(`/form/save`, {fid: pid, formData: data})
      .then(res => {
        router.push('/')
      }).catch(err => {
        Toast.fail('发布失败,请重试', 2);
      })
  }

  useEffect(() => {
    document.title = '技术生活圈'
  }, [])
  return <div className={styles.editWrap}>
    <div className={styles.navBar}>
      <span className={styles.leftBtn} onClick={toHome}><Icon type="left" /></span>
      <Button type="primary" className={styles.rightBtn} size="small" onClick={onSubmit}>发表</Button>
    </div>
    <div className={styles.contentEdit}>
      <InputItem
        clear
        placeholder="输入1-2个字心情,用于头像显示"
        maxLength={2}
        onChange={onTextChange.bind(this, 'tx')}
      ></InputItem>
      <TextareaItem
        placeholder="这一刻的想法..."
        autoHeight
        rows={3}
        onChange={onTextChange.bind(this, 'think')}
        labelNumber={6}
        count={100}
      />
      <div>
        <ImagePicker
            length="3"
            files={files}
            onChange={onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 9}
            onAddImageClick={onAddImageClick}
            accept="image/*"
            multiple
          />
          <p style={{color: 'red', marginLeft: '10px'}}>图片最好小于1M,否则可能上传失败~</p>
      </div>
    </div>
  </div>
}



export default Edit
