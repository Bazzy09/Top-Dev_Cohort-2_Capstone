function createCommentSection() {
  const form = document.createElement('form');
  form.action = '';
  form.className = 'comment-form';

  const commentDateLabel = document.createElement('label');
  commentDateLabel.textContent = 'Date';
  commentDateLabel.for = 'comment-date';

  const commentDate = document.createElement('input');
  commentDate.style.display = 'none';
  commentDate.type = 'date';
  commentDate.id = 'comment-date';
  const today = new Date().toISOString().split('T')[0];
  commentDate.value = today;

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'comment-username';
  nameLabel.className = 'comment-username';
  nameLabel.textContent = 'Name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'comment-username';
  nameInput.placeholder = 'Your name';

  const insightsLabel = document.createElement('label');
  insightsLabel.htmlFor = 'comment-insights';
  insightsLabel.className = 'comment-insights';
  insightsLabel.textContent = 'Insights';

  const insightsTextarea = document.createElement('textarea');
  insightsTextarea.id = 'comment-insights';
  insightsTextarea.placeholder = 'Your insights';
  insightsTextarea.rows = '6';

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'submit-comment';
  submitButton.textContent = 'Comment';

  const commentFields = [commentDate, nameLabel, nameInput, insightsLabel, insightsTextarea, submitButton];
  for (let i = 0; i < commentFields.length; i += 1) {
    form.appendChild(commentFields[i]);
  }
  return form;
}

export { createCommentSection };