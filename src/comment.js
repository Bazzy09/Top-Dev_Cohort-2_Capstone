/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
let commentStore = [];

class Comment {
  constructor(date, name, insight, movieId) {
    this.date = date;
    this.name = name;
    this.insight = insight;
    this.movieId = movieId;
  }
}

function generateCommentForm() {
  const form = document.createElement('form');
  form.action = '';
  form.className = 'comment-form';

  const commentDateLabel = document.createElement('label');
  commentDateLabel.textContent = 'Date';
  commentDateLabel.for = 'comment-date';

  const commentDate = document.createElement('input');
  commentDate.style.display = 'none';
  commentDate.type = 'text';
  commentDate.id = 'comment-date';

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

  commentDate.value = formattedDate;

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'comment-username';
  nameLabel.className = 'comment-username';
  nameLabel.textContent = 'Name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'comment-username';
  nameInput.placeholder = 'Your name';
  nameInput.required = true;

  const insightsLabel = document.createElement('label');
  insightsLabel.htmlFor = 'comment-insights';
  insightsLabel.className = 'comment-insights';
  insightsLabel.textContent = 'Insights';

  const insightsTextarea = document.createElement('textarea');
  insightsTextarea.id = 'comment-insights';
  insightsTextarea.placeholder = 'Your insights';
  insightsTextarea.rows = '6';
  insightsTextarea.required = true;

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

function createCommentLogs() {
  const commentLogSection = document.createElement('div');
  commentLogSection.className = 'comment-log-section';

  const commentHeader = document.createElement('h2');
  commentHeader.className = 'comment-header';
  commentHeader.textContent = 'Comments';

  const commentRecords = document.createElement('div');
  commentRecords.className = 'comment-records';

  commentLogSection.appendChild(commentHeader);
  commentLogSection.appendChild(commentRecords);

  return commentLogSection;
}

function addCommentToComments() {
  const date = document.querySelector('#comment-date').value;
  const name = document.querySelector('#comment-username').value;
  const insight = document.querySelector('#comment-insights').value;
  const movieId = document.querySelector('.showId').textContent;

  const newCommentEntry = new Comment(date, name, insight, movieId);
  commentStore.push(newCommentEntry);
  addComment(movieId);
  createLocalStore();
}

function addComment(movieId) {
  const commentRecords = document.querySelector('.comment-records');
  commentRecords.innerHTML = '';
  const filteredComments = commentStore.filter((obj) => obj.movieId === movieId);

  for (let i = 0; i < filteredComments.length; i += 1) {
    const eachComment = filteredComments[i];
    const eachRecord = document.createElement('p');
    eachRecord.className = 'new-record';
    eachRecord.textContent = `${eachComment.date} ${eachComment.name}: ${eachComment.insight}`;
    commentRecords.appendChild(eachRecord);
  }
}

function createLocalStore() {
  localStorage.setItem('commentStore', JSON.stringify(commentStore));
}

function retrieveLocalStore() {
  const storedTasks = JSON.parse(localStorage.getItem('commentStore'));
  commentStore = storedTasks;
}

function initializeComments() {
  retrieveLocalStore();
  const movieId = document.querySelector('.showId').textContent;
  addComment(movieId);
}

export { generateCommentForm, createCommentLogs, addCommentToComments, initializeComments };
