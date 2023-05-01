import React, { useEffect, useState } from 'react'
import SubHeader from '../SubHeader/SubHeader';
import Card from '../card/Card';
import { getData } from '../../service/getData';

const PageCardBody = ({page}) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const resp = await getData(page);
    setItemList(resp);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SubHeader text={'Popular '+page}/>
      {
        loading ? <>Loading...</> :
        <div className='cardContainer'>
            {
            itemList?.map((item)=>{
                return <div key={item.title}>
                <Card
                    title={item.title}
                    year={item.releaseYear}
                    backgroundImg={item.images["Poster Art"].url}
                />
                </div>
            })
            }
        </div>
      }
    </>
  );
}

export default PageCardBody