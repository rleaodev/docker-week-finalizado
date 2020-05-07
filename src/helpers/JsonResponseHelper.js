class JsonResponseHelper {
  static successResponse(expressResponse, data) {
    expressResponse.status(200).json(data);
  }

  static failResponse(expressNext, err) {
    return expressNext(err);
  }

  static response(err, data, expressResponse, expressNext) {
    if (err) {
      return JsonResponseHelper.failResponse(expressNext, err)
    }

    expressResponse.json(data)
  }
}

module.exports = JsonResponseHelper