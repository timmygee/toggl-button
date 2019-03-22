/**
 * Storeable Preferences
 */
interface IStoreable {
  /**
   * Set to true, to start timer on opening browser
   */
  startAutomatically: boolean;
  /**
   * Set to true, to stop timer on closing browser
   */
  stopAutomatically: boolean;
  /**
   * Set to true, to enable context menu on webpages
   */
  showRightClickButton: boolean;
  showPostPopup: boolean;
  /**
   * Set to true, to enable nag reminder
   */
  nannyCheckEnabled: boolean;
  /**
   * Nag interval in milliseconds
   */
  nannyInterval: number;
  /**
   * Time period during which nag should be enabled
   */
  nannyFromTo: '09:00-17:00',
  /**
   * Set to true, to enable idle-detection
   */
  idleDetectionEnabled: boolean;
  /**
   * Set to true, to enable pomodoro mode
   */
  pomodoroModeEnabled: boolean;
  /**
   * @deprecated Don't think this is configurable
   */
  pomodoroSoundFile: 'sounds/time_is_up_1.mp3';
  /**
   * Set to true, to enable sound notifications on pomodoro end
   */
  pomodoroSoundEnabled: boolean;
  /**
   * Pomdoro volume level, float configurable from 0 to 1
   */
  pomodoroSoundVolume: 1;
  /**
   * Set to true, to stop time tracking at the end of pomodoro interval
   */
  pomodoroStopTimeTrackingWhenTimerEnds: boolean;
  /**
   * Number of minutes in pomodoro interval
   */
  pomodoroInterval: number;
  /**
   * Set to true, to stop time-entry automatically at the end of work-day
   */
  stopAtDayEnd: boolean;
  /**
   * Day end time in 24 hour format, eg. 17:00
   */
  dayEndTime: string;
  /**
   * Project ID of the default project
   */
  defaultProject: number;
  /**
   *
   */
  rememberProjectPer: 'false';
  /**
   * Set to true, to enable automatic tagging
   */
  enableAutoTagging: boolean;
};

type TStoreableKey = keyof IStoreable;

/**
 * Storage Interface
 */
export interface IStorage {
  /**
   * Returns the stored key or default value supplied or null in that order.
   * @param key setting key
   * @param defaultValue Default value if key has not been presisted
   */
  get<K extends TStoreableKey>(key: K, defaultValue?: IStoreable[K]): Promise<IStoreable[K] | null>;

  /**
   * Updates the persistent store's key to given value
   * @param key setting key
   * @param value Value to set
   */
  set<K extends TStoreableKey>(key: K, value: IStoreable[K]): Promise<void>;

  /**
   * Updates multiples settings given a partial subtree of the settings
   * @param settings
   */
  setMultiple(settings: Partial<IStoreable>): Promise<void>;

  /**
   * Returns all stored preferences
   */
  getAll(): Promise<IStoreable>;
}
