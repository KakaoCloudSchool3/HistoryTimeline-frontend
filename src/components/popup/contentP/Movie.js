import '../../../styles/contents/movie.css';

function Movie(props) {
    // className prop을 추가하여 외부에서 전달받은 클래스를 적용합니다.
    const { src, name, className } = props; // 구조 분해 할당을 사용하여 props를 추출합니다.

    console.log(src);

    return (
        <div className={`movie card movie-specific movie-background ${className}`}>
          <img
            src={src}
            className="card-img-top" // class -> className으로 변경
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
          </div>
        </div>
    );
}

export default Movie;
