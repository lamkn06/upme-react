export const hasWhiteSpace = (value: string): boolean => {
  if (typeof value === 'undefined') return false;
  if (typeof value !== 'string') return false;
  const regex = new RegExp('\\s+');
  return regex.test(value);
};

export const urlPatternValidation = (url: string): string => {
  if (typeof url === 'undefined') return '';
  if (typeof url !== 'string') return '';
  const regex = new RegExp(
    '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
  );

  if (!regex.test(url)) return '';
  return url;
};

export const urlParseProtocol = (url: string): string => {
  if (!url) {
    return '';
  }

  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#()?&//=]*)/;

  if (!regex.test(url)) {
    return `//${url}`;
  }

  return url;
};
export const serializeQuery = (obj: Record<string, any>) => {
  const recursive = (data: Record<string, any>): string[] => {
    return Object.entries(data).reduce((acc: any, [key, val]) => {
      if (Array.isArray(val)) {
        acc.push(val.map((item: any) => `${key}[]=${item}`).join('&'));
      } else if (typeof val === 'object') {
        acc = [...acc, ...recursive(val)];
      } else {
        if (Boolean(val)) acc.push(`${key}=${encodeURIComponent(val)}`);
      }
      return acc;
    }, []);
  };
  const listParams = recursive(obj);
  return listParams.filter(Boolean).join('&').replace('&&', '&');
};

export const replaceDescription = (value: string): string => {
  if (typeof value === 'undefined') return '';
  if (typeof value !== 'string') return '';
  return value.replace(/<(.|\n)*?>/g, '').trim();
};

export const numberWithDots = (value: number): string => {
  if (typeof value === 'undefined') return '';
  if (typeof value !== 'number') return '';
  return value.toLocaleString('de-DE');
};

export const FORMAT_FULL_DATE = 'MMM DD YYYY hh:mm A';
export const REGEX_EMOJI =
  /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
export const REGEX_SPECIAL_CHARACTERS =
  /(?:[^!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])/;

export const getFitSizes = (
  widthScreen: number,
  heightScreen: number,
  widthImage: number,
  heightImage: number,
) => {
  const maxHeight = heightScreen - 20;
  const maxWidth = widthScreen - 20;

  const maxRatio = maxWidth / maxHeight;
  const srcRatio = widthImage / heightImage;
  if (maxRatio > srcRatio) {
    return {
      width: (widthImage * maxHeight) / heightImage,
      height: maxHeight,
    };
  }

  return {
    width: maxWidth,
    height: (heightImage * maxWidth) / widthImage,
  };
};
