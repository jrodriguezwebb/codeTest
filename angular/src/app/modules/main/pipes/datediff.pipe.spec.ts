import { DateDiffPipe } from './datediff.pipe';

describe('TestPipe', () => {
  it('create an instance', () => {
    const pipe = new DateDiffPipe();
    expect(pipe).toBeTruthy();
  });

  it('must calculate hours difference', () => {
    const pipe = new DateDiffPipe();

    const starts = "2018-01-09T06:40:00+00:00";
    const ends = "2018-01-09T07:20:00+00:00";   
    
    expect(pipe.transform(starts,ends)).toBe('00:40:00');
  });
});