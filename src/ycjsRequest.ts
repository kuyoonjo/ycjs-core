export function YcjsRequest(
  method: string,
  url: string,
  params: any = {},
  headers: any = {},
  json: boolean = false,
  responseType: string = ''
): Promise<any> {
  if (!~['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].indexOf(method.toUpperCase())) {
    return Promise.reject('unsupported method:' + method);
  }
  return new Promise((resolve, reject) => {
    let formData: any;
    let xhr: XMLHttpRequest = new XMLHttpRequest();

    if (json) {
      formData = JSON.stringify(params);
    } else {
      formData = new FormData();
      if (params) {
        for (let key of Object.keys(params)) {
          if (params[key].constructor === Array) {
            for (let item of params[key]) {
              formData.append(key, item);
            }
          } else {
            formData.append(key, params[key]);
          }
        }
      }
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          try {
            let response: any = JSON.parse(xhr.response);
            resolve({
              statusCode: xhr.status,
              data: response
            });
          } catch (e) {
            resolve({
              statusCode: xhr.status,
              data: xhr.response
            });
          }
        } else {
          try {
            let response: any = JSON.parse(xhr.response);
            reject({
              statusCode: xhr.status,
              data: response
            });
          } catch (e) {
            reject({
              statusCode: xhr.status,
              data: xhr.response
            });
          }
        }
      }
    };

    xhr.open(method, url, true);
    if (headers) {
      for (let key of Object.keys(headers)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
    if (json) {
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    }
    xhr.send(formData);
  });
}

export interface YcjsRequestPaginateData {
  docs: any[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
