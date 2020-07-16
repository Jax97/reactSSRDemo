import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useCallback } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { IState } from './store/index';
// import { resolve } from 'path';

class About extends React.Component {
  static loadData = (store) => {
    return new Promise((resolve) => {
      axios
        .get('http://localhost:3001/getData')
        .then((res) => {
          store.dispatch({
            type: 'CHANGE_DATA',
            payload: { data: res.data.data },
          });

          // resolve(res.data.data);
          resolve();
        })
        .catch((err) => {
          console.log('请求报错：', err);
        });
    });
  };
  render() {
    return (
      <div>
        <div>这是About页面</div>
        <div>获取到的数据：{this.props.data} </div>
      </div>
    );
  }
}

// const About = () => {
//   //   const [data, setData] = useState('');

//   //     useEffect(() => {
//   //   axios.get('http://localhost:3000/getData').then((res) => {
//   //     setData(res.data.data);
//   //   });
//   //     }, []);
//   const data = useSelector((state: IState) => state.data);
//   //   useEffect(() => {
//   //     // const fetchData = async () => {
//   //     //   const res = await About.loadData();
//   //     //   console.log('res客户端：', res);
//   //     // };
//   //     // fetchData();
//   //   }, []);
//   return (
//     <div>
//       <div>这是About页面</div>
//       <div>获取到的数据：{data} </div>
//     </div>
//   );
// };

// About.loadData = () => {
//   const dispatch = useDispatch();
//   return new Promise((resolve) => {
//     axios
//       .get('http://localhost:3000/getData')
//       .then((res) => {
//         useCallback(() => {
//           const data = dispatch({
//             type: 'CHANGE_DATA',
//             payload: res.data.data,
//           });
//           console.log('data: ', data);
//         }, [dispatch]);
//         // resolve(res.data.data);
//         resolve();
//       })
//       .catch((err) => {
//         console.log('请求报错：', err);
//       });
//   });
// };

const mapStateToProps = (state: IState) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeData(data) {
      dispatch({
        type: 'CHANGE_DATA',
        payload: {
          data,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
