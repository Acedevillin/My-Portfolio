let timeline = new TimelineMax();

timeline
  .fromTo('.circle', { opacity: 0 }, { opacity: 1, duration: 0.5 })
  .fromTo('.cover', { opacity: 0 }, { opacity: 1, duration: 0.5 });
