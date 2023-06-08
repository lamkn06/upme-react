const parallax = (e) => {
  document.querySelectorAll('.movingObject').forEach((move: any) => {
    const x = (e.clientX * 5) / 250;
    const y = (e.clientY * 5) / 250;
    const nextTransform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
    move.style.transition = 'unset';
    move.style.transform = nextTransform;
  });
};

const initPosition = (e) => {
  document.querySelectorAll('.movingObject').forEach((move: any) => {
    const x = (e.clientX * 5) / 250;
    const y = (e.clientY * 5) / 250;
    const nextTransform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
    move.style.transition = 'transform 0.3s';
    move.style.transform = nextTransform;
  });
};

const resetPosition = () => {
  document.querySelectorAll('.movingObject').forEach((move: any) => {
    move.style.transform = 'translateX(0) translateY(0)';
    move.style.transition = 'transform 0.3s';
  });
};

export const transformBG = () => {
  document.addEventListener('mousemove', parallax);
  document.addEventListener('mouseenter', initPosition);
  document.addEventListener('mouseleave', resetPosition);
};

export const removeListenerTransformBG = () => {
  document.removeEventListener('mousemove', parallax);
  document.removeEventListener('mouseenter', initPosition);
  document.removeEventListener('mouseleave', resetPosition);
};
