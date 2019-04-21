import React from 'react'

const StartWindow = ({workList}) => {

  return (
    <div>
      {workList.map((yearWorkList) => (
        <div key={yearWorkList.year}>
          {'год: ' + yearWorkList.year}
          {
            (typeof(yearWorkList.months) === 'object') ?
              <div>
                {
                  yearWorkList.months.map((monthsWorkList) =>
                    <div key={`${yearWorkList.year}-${monthsWorkList.numberMonth}`}>
                      <div>{monthsWorkList.month}</div>
                      {
                        (typeof(monthsWorkList.days) === 'object') ?
                          <div>
                            {
                              monthsWorkList.days.map((daysWorkList) =>
                                <div key={`${yearWorkList.year}-${monthsWorkList.numberMonth}-${daysWorkList.dataDay}`}>
                                  <div>{daysWorkList.dataDay}</div>
                                  <div>{daysWorkList.weekday}</div>
                                  <div>{daysWorkList.workingTime}</div>
                                  <div>{daysWorkList.hoursWorked}</div>
                                  <div>{daysWorkList.hourlyRate}</div>
                                  <div>{daysWorkList.gainings}</div>
                                </div>
                              )
                            }
                          </div>
                          : null
                      }
                    </div>
                  )
                }
              </div>
              : null
          }
        </div>
      ))}
    </div>
  )


};

export default StartWindow;

