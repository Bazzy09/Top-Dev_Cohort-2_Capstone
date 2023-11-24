const reservationStore = [];

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

function createReservationLogs() {
  const reservationLogSection = document.createElement('div');
  reservationLogSection.className = 'reservation-log-section';

  const reservationHeader = document.createElement('h2');
  reservationHeader.className = 'reservation-header';
  reservationHeader.textContent = 'Reservations';

  const reservationRecords = document.createElement('div');
  reservationRecords.className = 'reservation-records';

  reservationLogSection.appendChild(reservationHeader);
  reservationLogSection.appendChild(reservationRecords);

  return reservationLogSection;
}

function addReservationToReservations() {
  const name = document.querySelector('#reservation-name').value;
  const startDate = document.querySelector('#start-date').value;
  const endDate = document.querySelector('#end-date').value;
  const newReservationEntry = new Reservation(name, startDate, endDate);
  reservationStore.push(newReservationEntry);
  reservationLocalStore();
  addReservation();
}

function addReservation() {
  const reservationRecords = document.querySelector('.reservation-records');
  reservationRecords.innerHTML = '';
  for (let i = 0; i < reservationStore.length; i += 1) {
    const newRecord = reservationStore[i];
    const eachRecord = document.createElement('p');
    eachRecord.className = 'new-record';
    eachRecord.textContent = `${newRecord.name}: ${newRecord.startDate} to ${newRecord.endDate}`;
    reservationRecords.appendChild(eachRecord);
  }
}

function reservationLocalStore () {
  localStorage.setItem('reservationStore', JSON.stringify(reservationStore));
}

export { generateReservationForm, createReservationLogs, addReservationToReservations };