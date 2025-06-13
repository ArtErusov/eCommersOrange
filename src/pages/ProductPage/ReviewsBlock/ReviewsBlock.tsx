import { FC, useState } from 'react';
import styles from './ReviewsBlock.module.css';
import reviewsData from './reviewsData.json';
import { GameReview } from './ReviewsBlock.interface';

const ReviewsBlock: FC = () => {
  const [reviews, setReviews] = useState<GameReview[]>(reviewsData);
  // formData - состояние для управления полями формы с дефолтными значениями
  const [formData, setFormData] = useState({
    username: '',
    review: '',
    pros: '',
    cons: '',
    rating: 5,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.review.trim()) {
      alert('Пожалуйста, заполните имя пользователя и отзыв');
      return;
    }

    const newReview: GameReview = {
      id: Date.now(), // Простой способ генерации уникального ID
      username: formData.username.trim(),
      review: formData.review.trim(),
      pros: formData.pros.trim() || undefined,
      cons: formData.cons.trim() || undefined,
      rating: formData.rating,
      time: new Date().toLocaleString('ru-RU'),
    };

    setReviews((prev) => [newReview, ...prev]); // Добавляем новый отзыв в начало списка

    // Очищаем форму
    setFormData({
      username: '',
      review: '',
      pros: '',
      cons: '',
      rating: 5,
    });
  };

  return (
    <>
      <h2>Отзывы ({reviews.length})</h2>
      <ul>
        {reviews.map((item) => (
          <li key={item.id} className={styles['reviews']}>
            <div className={styles['review-header']}>
              <p className={styles['reviews-user']}>{item.username}</p>
              <span className={styles['review-rating']}>
                {'★'.repeat(item.rating)}
                {'☆'.repeat(5 - item.rating)}
              </span>
              <span className={styles['review-time']}>{item.time}</span>
            </div>
            {item.review && <p className={styles['review-text']}>{item.review}</p>}
            {item.pros && (
              <div className={styles['review-pros']}>
                <strong>Плюсы:</strong> {item.pros}
              </div>
            )}
            {item.cons && (
              <div className={styles['review-cons']}>
                <strong>Минусы:</strong> {item.cons}
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* ------------------Добавить отзыв------------------ */}
      <h2>Добавить отзыв</h2>
      <form onSubmit={handleSubmit} className={styles['review-form']}>
        <div className={styles['form-group']}>
          <label htmlFor="username">Имя пользователя *</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className={styles['form-input']}
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="rating">Оценка</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className={styles['form-select']}
          >
            <option value={1}>1 звезда</option>
            <option value={2}>2 звезды</option>
            <option value={3}>3 звезды</option>
            <option value={4}>4 звезды</option>
            <option value={5}>5 звезд</option>
          </select>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="review">Отзыв *</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleInputChange}
            required
            rows={4}
            className={styles['form-textarea']}
            placeholder="Напишите ваш отзыв о продукте..."
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="pros">Плюсы</label>
          <textarea
            id="pros"
            name="pros"
            value={formData.pros}
            onChange={handleInputChange}
            rows={2}
            className={styles['form-textarea']}
            placeholder="Что вам понравилось?"
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="cons">Минусы</label>
          <textarea
            id="cons"
            name="cons"
            value={formData.cons}
            onChange={handleInputChange}
            rows={2}
            className={styles['form-textarea']}
            placeholder="Что можно улучшить?"
          />
        </div>

        <button type="submit" className={styles['submit-button']}>
          Добавить отзыв
        </button>
      </form>
    </>
  );
};

export default ReviewsBlock;
