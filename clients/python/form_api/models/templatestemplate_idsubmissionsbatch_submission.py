# coding: utf-8

"""
    API V1

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)

    OpenAPI spec version: v1

    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from pprint import pformat
from six import iteritems
import re


class TemplatestemplateIdsubmissionsbatchSubmission(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    """


    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'id': 'str',
        'test': 'bool',
        'expired': 'bool',
        'expires_at': 'str',
        'state': 'str',
        'metadata': 'object',
        'download_url': 'str'
    }

    attribute_map = {
        'id': 'id',
        'test': 'test',
        'expired': 'expired',
        'expires_at': 'expires_at',
        'state': 'state',
        'metadata': 'metadata',
        'download_url': 'download_url'
    }

    def __init__(self, id=None, test=None, expired=None, expires_at=None, state=None, metadata=None, download_url=None):
        """
        TemplatestemplateIdsubmissionsbatchSubmission - a model defined in Swagger
        """

        self._id = None
        self._test = None
        self._expired = None
        self._expires_at = None
        self._state = None
        self._metadata = None
        self._download_url = None
        self.discriminator = None

        self.id = id
        self.test = test
        self.expired = expired
        if expires_at is not None:
          self.expires_at = expires_at
        self.state = state
        if metadata is not None:
          self.metadata = metadata
        if download_url is not None:
          self.download_url = download_url

    @property
    def id(self):
        """
        Gets the id of this TemplatestemplateIdsubmissionsbatchSubmission.

        :return: The id of this TemplatestemplateIdsubmissionsbatchSubmission.
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """
        Sets the id of this TemplatestemplateIdsubmissionsbatchSubmission.

        :param id: The id of this TemplatestemplateIdsubmissionsbatchSubmission.
        :type: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")

        self._id = id

    @property
    def test(self):
        """
        Gets the test of this TemplatestemplateIdsubmissionsbatchSubmission.

        :return: The test of this TemplatestemplateIdsubmissionsbatchSubmission.
        :rtype: bool
        """
        return self._test

    @test.setter
    def test(self, test):
        """
        Sets the test of this TemplatestemplateIdsubmissionsbatchSubmission.

        :param test: The test of this TemplatestemplateIdsubmissionsbatchSubmission.
        :type: bool
        """
        if test is None:
            raise ValueError("Invalid value for `test`, must not be `None`")

        self._test = test

    @property
    def expired(self):
        """
        Gets the expired of this TemplatestemplateIdsubmissionsbatchSubmission.

        :return: The expired of this TemplatestemplateIdsubmissionsbatchSubmission.
        :rtype: bool
        """
        return self._expired

    @expired.setter
    def expired(self, expired):
        """
        Sets the expired of this TemplatestemplateIdsubmissionsbatchSubmission.

        :param expired: The expired of this TemplatestemplateIdsubmissionsbatchSubmission.
        :type: bool
        """
        if expired is None:
            raise ValueError("Invalid value for `expired`, must not be `None`")

        self._expired = expired

    @property
    def expires_at(self):
        """
        Gets the expires_at of this TemplatestemplateIdsubmissionsbatchSubmission.

        :return: The expires_at of this TemplatestemplateIdsubmissionsbatchSubmission.
        :rtype: str
        """
        return self._expires_at

    @expires_at.setter
    def expires_at(self, expires_at):
        """
        Sets the expires_at of this TemplatestemplateIdsubmissionsbatchSubmission.

        :param expires_at: The expires_at of this TemplatestemplateIdsubmissionsbatchSubmission.
        :type: str
        """

        self._expires_at = expires_at

    @property
    def state(self):
        """
        Gets the state of this TemplatestemplateIdsubmissionsbatchSubmission.

        :return: The state of this TemplatestemplateIdsubmissionsbatchSubmission.
        :rtype: str
        """
        return self._state

    @state.setter
    def state(self, state):
        """
        Sets the state of this TemplatestemplateIdsubmissionsbatchSubmission.

        :param state: The state of this TemplatestemplateIdsubmissionsbatchSubmission.
        :type: str
        """
        if state is None:
            raise ValueError("Invalid value for `state`, must not be `None`")
        allowed_values = ["pending", "processed", "invalid_data", "error", "image_download_failed", "image_processing_failed"]
        if state not in allowed_values:
            raise ValueError(
                "Invalid value for `state` ({0}), must be one of {1}"
                .format(state, allowed_values)
            )

        self._state = state

    @property
    def metadata(self):
        """
        Gets the metadata of this TemplatestemplateIdsubmissionsbatchSubmission.

        :return: The metadata of this TemplatestemplateIdsubmissionsbatchSubmission.
        :rtype: object
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """
        Sets the metadata of this TemplatestemplateIdsubmissionsbatchSubmission.

        :param metadata: The metadata of this TemplatestemplateIdsubmissionsbatchSubmission.
        :type: object
        """

        self._metadata = metadata

    @property
    def download_url(self):
        """
        Gets the download_url of this TemplatestemplateIdsubmissionsbatchSubmission.

        :return: The download_url of this TemplatestemplateIdsubmissionsbatchSubmission.
        :rtype: str
        """
        return self._download_url

    @download_url.setter
    def download_url(self, download_url):
        """
        Sets the download_url of this TemplatestemplateIdsubmissionsbatchSubmission.

        :param download_url: The download_url of this TemplatestemplateIdsubmissionsbatchSubmission.
        :type: str
        """

        self._download_url = download_url

    def to_dict(self):
        """
        Returns the model properties as a dict
        """
        result = {}

        for attr, _ in iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """
        Returns the string representation of the model
        """
        return pformat(self.to_dict())

    def __repr__(self):
        """
        For `print` and `pprint`
        """
        return self.to_str()

    def __eq__(self, other):
        """
        Returns true if both objects are equal
        """
        if not isinstance(other, TemplatestemplateIdsubmissionsbatchSubmission):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """
        Returns true if both objects are not equal
        """
        return not self == other