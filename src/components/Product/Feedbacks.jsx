/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../ContextAPI';
import { StyledFeedbacks } from '../styled';
import Stars from './Stars';
import { Button } from '..';

const emailRegex = (
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm
);

const initalForm = { email: '', message: '', stars: 0 };

const Feedbacks = () => {
  const { feedbacks, addFeedback } = useContext(Context);
  const [form, setForm] = useState(initalForm);
  const { id } = useParams();

  const handleChange = ({ target: { name, value } }) => (
    setForm({ ...form, [name]: value })
  );

  const handleStars = (stars) => setForm({ ...form, stars });

  const handleSubmit = (e) => {
    e.preventDefault();

    addFeedback({
      id,
      email: form.email,
      stars: form.stars,
      message: (form.message === '' ? null : form.message),
    });
    setForm(initalForm);
  };

  const disableBtn = (
    !form.email.match(emailRegex)
    || form.stars === 0
  );

  return (
    <StyledFeedbacks>
      <p className="feedback-title">Avalie o produto!</p>
      <form className="feedback-form" onSubmit={ handleSubmit }>
        <div className="form-row">
          <input
            type="email"
            placeholder="Digite seu email"
            name="email"
            value={ form.email }
            onChange={ handleChange }
          />
          <Stars stars={ form.stars } handleStars={ handleStars } clickable />
        </div>
        <div className="form-row">
          <textarea
            data-testid="product-detail-evaluation"
            name="message"
            placeholder="Deixe um comentário!"
            maxLength="300"
            value={ form.message }
            onChange={ handleChange }
          />
        </div>
        <Button
          type="submit"
          bgColor="#5351c2"
          color="#ffffff"
          disabled={ disableBtn }
        >
          Avaliar
        </Button>
      </form>
      <div className="product-feedbacks">
        {
          feedbacks
            .filter((f) => f.id === id)
            .map((f, i) => (
              <div key={ `${id}-feedback-${i}` } className="feedback">
                <p className="feedback-email">{f.email}</p>
                <Stars stars={ f.stars } />
                { f.message ? <p className="feedback-message">{f.message}</p> : null }
              </div>
            ))
        }
      </div>
    </StyledFeedbacks>
  );
};

export default Feedbacks;
