import './Card.scss';
import imgArticle from '../../assets/images/illustration-article.svg';
import imgAuthor from '../../assets/images/image-avatar.webp';

export default function Card() {
  return (
    <div className="card">
      <img src={imgArticle} alt="Article_photo" className="card__imgArticle" />
      <div className="card__content">
        <a href="/" className="card__content__tag">
          learning
        </a>
        <em className="card__content__date">Published 21 Dec 2023</em>
        <h1 className="card__content__title">HTML & CSS foundations</h1>
        <p className="card__content__description">
          These languages are the backbone of every website, defining structure,
          content and presentation.
        </p>
      </div>
      <div className="card__author">
        <img src={imgAuthor} alt="Author" className="card__author__avatar" />
        <strong className="card__author__name">Greg Hooper</strong>
      </div>
    </div>
  );
}
