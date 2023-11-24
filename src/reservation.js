let reservationStore = [];

class Reservation {
  constructor(name, startDate, endDate) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

function generateReservationForm() {
  const form = document.createElement('form');
  form.action = '';
  form.className = 'reservation-form';

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'reservation-name';
  nameLabel.textContent = 'Name';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'reservation-name';
  nameInput.placeholder = 'Your name';
  nameInput.required = true;

  const startDateLabel = document.createElement('label');
  startDateLabel.htmlFor = 'start-date';
  startDateLabel.textContent = 'Start Date';

  const startDateInput = document.createElement('input');
  startDateInput.type = 'date';
  startDateInput.id = 'start-date';
  startDateInput.required = true;

  const endDateLabel = document.createElement('label');
  endDateLabel.htmlFor = 'end-date';
  endDateLabel.textContent = 'End Date';

  const endDateInput = document.createElement('input');
  endDateInput.type = 'date';
  endDateInput.id = 'end-date';
  endDateInput.required = true;

  const reserveButton = document.createElement('button');
  reserveButton.type = 'button';
  reserveButton.className = 'reserve-button';
  reserveButton.textContent = 'Reserve';

  const reservationFields = [nameLabel, nameInput, startDateLabel, startDateInput, endDateLabel, endDateInput, reserveButton];
  for (let i = 0; i < reservationFields.length; i += 1) {
    form.appendChild(reservationFields[i]);
  }

  return form;
}
