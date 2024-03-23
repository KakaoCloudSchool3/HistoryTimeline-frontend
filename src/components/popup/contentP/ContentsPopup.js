import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './Comments';
import ContentCard from './ContentCard';
import Description from './Description';
import PlatformSection from './PlatformSection';
import Detail from './Detail';
import '../../../styles/contents/ContentsPopup.css';

function ContentsPopup() {
  const contentId = "550"; // 여기에 해당 영화의 ID를 설정

  return (
    <div className="ContentsPopup">
      <div>
        <Description contentId={contentId}/>
        <div style={{ marginTop: "15px" }}>
          <PlatformSection contentId={contentId}/>
        </div>
        <div className="movie-card-margin">
          <ContentCard contentId={contentId}/>
        </div>
        <Detail contentId={contentId} /> 
        <div style={{ marginTop: "80px" }}>
          <Comments contentId={contentId}/>
        </div>
      </div>
    </div>
  );
}

export default ContentsPopup;